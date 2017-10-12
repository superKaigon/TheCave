const salleDemarage = [
        { id:'1',
        image:'https://i.pinimg.com/236x/32/9c/11/329c1136511681e74f10ec2b45d3ccc2--fantasy-rpg-dark-fantasy.jpg', 
        full: false,
        tables: [
                { id: '1', name: 'Table 1', occuped: false },
                { id: '2', name: 'Table 2', occuped: false },
                { id: '3', name: 'Table 3', occuped: false },
                { id: '4', name: 'Table 4', occuped: false }
         ]},
        { id:'2', 
        image:'https://i.pinimg.com/originals/95/23/90/952390fd9d9d9ac2b98b8118160805e0.jpg', 
        full: true,
        tables: [
                { id: '1', name: 'Table 1', occuped: false },
                { id: '2', name: 'Table 2', occuped: false },
                { id: '3', name: 'Table 3', occuped: false },
                { id: '4', name: 'Table 4', occuped: false }
         ]},
        { id:'3', 
        image:'http://www.dundjinni.com/forums/uploads/supercaptain/table_and_chairs_sc.png', 
        full: false,
        tables: [
                { id: '1', name: 'Table 1', occuped: false },
                { id: '2', name: 'Table 2', occuped: false },
                { id: '3', name: 'Table 3', occuped: false },
                { id: '4', name: 'Table 4', occuped: false }
         ]}
	]

export default function (state = salleDemarage, action) {
        switch (action.type) {
                case 'TABLE_SELECTED':
                  return [...state].map((table) => {
                               if (action.payload == null){
                                       return table
                               }
                                else if (table.id == action.payload.id) {
                                        return action.payload
                                } else {
                                        return table
                                }

                        })

        }
        return state 
}