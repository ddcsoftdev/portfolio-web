import { Button, Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import { getProjectDeployment, getProjectFrameworks, getProjectLanguages, getProjectTypes } from '../services/client';

// Types
type FilterOption = {
  value: string;
  label: string;
  checked: boolean;
};

type Filters = Record<string, FilterOption[]>;

type SortOption = {
  name: string;
  href: string;
  current: boolean;
};

// Static Data
const sortOptions: SortOption[] = [
  { name: 'Most Recent', href: '#', current: true },
  { name: 'Type', href: '#', current: false },
];

// Utility Function
function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

// Component
export default function Filter({ onTagsChange }: { onTagsChange: (tags: Record<string, string[]>) => void }) {
  const [filters, setFilters] = useState<Filters>({});
  const [tags, setTags] = useState<Record<string, string[]>>({});
  const [activeTagsNum, setActiveTagsNum] = useState<number>(0);

  // Helper Functions
  const setFiltersByName = (name: string, data: any): void => {
    const options = data.data.data.__type.enumValues.map((enumValue: any) => ({
      value: enumValue.name,
      label: enumValue.name,
      checked: false,
    }));

    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: options,
    }));
  };

  const findValueInDictionary = (dictionary: Filters, searchValue: string): FilterOption | undefined => {
    for (const options of Object.values(dictionary)) {
      for (const option of options) {
        if (option.value === searchValue) {
          return option;
        }
      }
    }
    return undefined;
  };

  const handleCheckboxChange = (key: string, value: string) => {
    setTags((prevTags) => {
      const allOptions = filters[key]?.map((filter) => filter.value) || [];
      const lowercaseKey = key.toLowerCase();
      const selectedTags = prevTags[lowercaseKey] || [];
      const isSelected = selectedTags.length !== 0 
        ? !selectedTags.includes(value)
        : false;
  
      let newSelectedTags = selectedTags.length !== 0
        ? selectedTags
        :allOptions;

      if (isSelected){
        newSelectedTags.push(value);
      } else {
        newSelectedTags = newSelectedTags.filter((tag) => tag !== value);
      }
  
      if (newSelectedTags.length === allOptions.length) {
        newSelectedTags = [];
      }
  
      const option = findValueInDictionary(filters, value);
      if (option) {
        option.checked = !isSelected;
      }
  
      setActiveTagsNum((prevCount) => 
        isSelected ? prevCount - 1 : prevCount + 1
      );
      
      const updatedTags = {
        ...prevTags,
        [lowercaseKey]: newSelectedTags,
      };
  
      onTagsChange(updatedTags);
      return updatedTags;
    });
  };
  

  const clearTags = () => {
    Object.values(filters).forEach(options =>
      options.forEach(option => {
        option.checked = false;
      })
    );
    setActiveTagsNum(0);
    setTags({});
    onTagsChange({});
  };

  const fetchFilters = async () => {
    try {
      const typesResponse = await getProjectTypes();
      setFiltersByName('Type', typesResponse);

      const languagesResponse = await getProjectLanguages();
      setFiltersByName('Language', languagesResponse);

      const frameworksResponse = await getProjectFrameworks();
      setFiltersByName('Framework', frameworksResponse);

      const deploymentResponse = await getProjectDeployment();
      setFiltersByName('Deployment', deploymentResponse);
    } catch (error) {
      console.error('Error fetching filters:', error);
    }
  };

  useEffect(() => {
    fetchFilters();
  }, []);

  // Render
  return (
    <div className="bg-white dark:bg-zinc-800">
      <Disclosure as="section" aria-labelledby="filter-heading" className="grid items-center border-b border-t border-gray-200">
        <h2 id="filter-heading" className="sr-only">Filters</h2>
        <div className="relative col-start-1 row-start-1 py-4">
          <div className="mx-auto flex max-w-7xl space-x-6 divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8">
            <div>
              <DisclosureButton className="group flex items-center font-medium text-gray-700 dark:text-gray-300">
                <FunnelIcon aria-hidden="true" className="mr-2 h-5 w-5 flex-none text-gray-400 dark:text-gray-300 group-hover:text-gray-500" />
                {activeTagsNum} Filters
              </DisclosureButton>
            </div>
            <div className="pl-6">
              <button type="button" className="text-gray-500 dark:text-gray-200" onClick={clearTags}>
                Clear all
              </button>
            </div>
          </div>
        </div>
        <DisclosurePanel className="border-t border-gray-200 py-10">
          <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
            {Object.entries(filters).map(([key, options]) => (
              <div key={key} className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
                <fieldset>
                  <legend className="block font-medium">{key}</legend>
                  <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
                    {options.map((filterOption, idx) => (
                      <div key={idx} className="flex items-center text-base sm:text-sm">
                        <input
                          id={`${key}-${filterOption.value}`}
                          name={`${key}[]`}
                          type="checkbox"
                          className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          checked={filterOption.checked}
                          onChange={() => handleCheckboxChange(key, filterOption.value)}
                        />
                        <label htmlFor={`${key}-${filterOption.value}`} className="ml-3 min-w-0 flex-1 text-gray-600 dark:text-gray-200">
                          {filterOption.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
            ))}
          </div>
        </DisclosurePanel>
        <div className="col-start-1 row-start-1 py-4">
          <div className="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
            <Menu as="div" className="relative inline-block">
              <div className="flex">
                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon aria-hidden="true" className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <MenuItem key={option.name}>
                      {({ active }) => (
                        <a
                          href={option.href}
                          className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          {option.name}
                        </a>
                      )}
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}
