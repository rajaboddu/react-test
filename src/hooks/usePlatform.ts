import type { Platform, PlatformResponse } from "../common/common.types"
import { useEffect, useState } from "react"
import axios from '../services/api-client'

const usePlatform = () => {
    const [platforms, setPlatforms] = useState<Platform[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        axios.get<PlatformResponse>('/platforms/lists/parents').then((res) => {
            setPlatforms(res.data.results);
        }).catch((err) => setError(err));
    }, [])

    return {platforms, error};
}

export default usePlatform;