import type { platformProps } from "../common/common.types";
import usePlatform from "../hooks/usePlatform";

const Platform = ({platform, handlePlatformChange} : platformProps) => {

    let {platforms, error} = usePlatform();
    
    return <>
    {error && <div>{error}</div>}
    <label htmlFor="myDropdown">Platform:</label>
        <select id="myDropdown" name="myDropdown" 
        onChange={(e) => handlePlatformChange(Number(e.target.value))}
            value={platform}>
        {platforms.map(platform =>  
            <option value={platform.id}>
                {platform.name}
            </option>)}
        </select>
    </>
}

export default Platform;