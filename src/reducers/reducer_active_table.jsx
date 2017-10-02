export default function (state=null, action) {
    switch (action.type) {
        case 'TABLE_SELECTED' : 
            return action.payload;
    }
    return state
}