import { useEffect, useState } from 'react';
const state = { serverHandoffComplete: false };
export function useServerHandoffComplete() {
    const [serverHandoffComplete, setServerHandoffComplete] = useState(state.serverHandoffComplete);
    useEffect(() => {
        if (serverHandoffComplete === true)
            return;
        setServerHandoffComplete(true);
    }, [serverHandoffComplete]);
    useEffect(() => {
        if (state.serverHandoffComplete === false)
            state.serverHandoffComplete = true;
    }, []);
    return serverHandoffComplete;
}
