export default function (state=null, action) {
    switch (action.type) {
        case 'STATUS_SELECTED' : 
            return action.payload;
    }
    return state
}