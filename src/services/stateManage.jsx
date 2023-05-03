import { createGlobalState } from "react-hooks-global-state"
    const initialState = {user:'',account:''};
    const {useGlobalState} = createGlobalState(initialState);
    export {useGlobalState};
;