import react from 'react'
import { Box, Card, CardContent, Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectors } from '../selectors/tasks'
import { Task } from '../types/task'

const CardComponent = () => {   
    const task: Task[] = useSelector(selectors.getTask)
    return (
        <div>
            {task.map(t => {
                return(
                    <Box display="flex" alignItems="center" justifyContent="space-between" my="50px">
                        <Card>
                            <CardContent>
                                <Typography variant="h5">
                                    {t.title}
                                </Typography>
                                <Typography variant="body2">
                                    {t.content}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                )
            })}
        </div>
    )

}

export default CardComponent