import useExperienceHooks from "../hooks/useExperienceHook";

const HelperExperienceFilter = () => {
    const { experience, setexperience } = useExperienceHooks();

    const handleExperienceChange = (event) => {
        const value = event.target.value;
        setexperience(value);
    };

    const thumbPosition = (experience / 40) * 100;

    return (
        <div className="my-4 relative">
            <label htmlFor="experience-range" className="block text-sm font-medium text-gray-700">
                Working Experience
            </label>
            <output
                htmlFor="experience-range"
                className="absolute left-0 bg-white text-sm"
                style={{ top: '-24px', left: `calc(${thumbPosition}% - 10px)` }}
            >
                {experience}
            </output>
            <div className="mt-2">
                <input
                    type="range"
                    id="experience-range"
                    name="experience"
                    min="0"
                    max="40"
                    value={experience}
                    onChange={handleExperienceChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    style={{ background: `linear-gradient(to right, #14415A 0%, #14415A ${thumbPosition}%, #ccc ${thumbPosition}%, #ccc 100%)` }}
                />
            </div>
            <div className="flex justify-between text-xs">
                <span>0</span>
                <span>10</span>
                <span>20</span>
                <span>40</span>
            </div>
        </div>
    );
};

export default HelperExperienceFilter;
