import { useState } from "react";
import "/src/index.css";

const FilterBar = () => {
    const [inputText, setInputText] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [language, setLanguage] = useState('');
    const [projectType, setProjectType] = useState('');
    const [technology, setTechnology] = useState('');

    const handleSelectChange = (e, type) => {
        const value = e.target.value;
        if (!selectedTags.includes(value) && value !== '') {
            setSelectedTags([...selectedTags, value]);
        }
        if (type === 'language') setLanguage(value);
        if (type === 'projectType') setProjectType(value);
        if (type === 'technology') setTechnology(value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && inputText.trim() !== '') {
            if (!selectedTags.includes(inputText)) {
                setSelectedTags([...selectedTags, inputText.trim()]);
                setInputText('');
            }
            e.preventDefault();
        }
    };

    const handleClear = () => {
        setInputText('');
        setSelectedTags([]);
        setLanguage('');
        setProjectType('');
        setTechnology('');
    };

    const removeTag = (tagToRemove) => {
        setSelectedTags(selectedTags.filter(tag => tag !== tagToRemove));
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="flex items-center space-x-2 mb-4">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Type Project Name"
                />
                <select value={language} onChange={(e) => handleSelectChange(e, 'language')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                    <option value="">Language</option>
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                    <option value="C++">C++</option>
                    <option value="C">C</option>
                    <option value="JavaScript">JavaScript</option>
                </select>
                <select value={projectType} onChange={(e) => handleSelectChange(e, 'projectType')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                    <option value="">Project Type</option>
                    <option value="Website">Website</option>
                    <option value="Webapp">WebApp</option>
                    <option value="Videogame">Videogame</option>
                    <option value="Software">Software</option>
                </select>
                <select value={technology} onChange={(e) => handleSelectChange(e, 'technology')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5">
                    <option value="">Technology</option>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="UnrealEngine">Unreal Engine</option>
                </select>
                <button onClick={handleClear} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Clear
                </button>
            </div>
            <div className="flex flex-wrap gap-2">
                {selectedTags.map((tag, index) => (
                    <div key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded flex items-center dark:bg-blue-200 dark:text-blue-800">
                        {tag}
                        <button onClick={() => removeTag(tag)} className="ml-2 text-blue-500 text-sm p-0.5">
                            ×
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterBar;
