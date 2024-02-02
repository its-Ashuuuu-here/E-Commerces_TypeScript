import React from 'react';
import { Task } from '../Context/Task'
export const CustomComponnt =
(props: React.ComponentProps<typeof Task>
    )=>{
        return(
            <div>
                {props.name}
            </div>
        )
    }