import React, { useContext, useState } from 'react';
import Header from '../others/Header';
import TaskListNumbers from '../others/TaskListNumbers';
import TaskList from '../TaskList/TaskList';
import { AuthContext } from '../../context/AuthProvider';

function EmployeeDashboard(props) {
    const [employee, setEmployee] = useState(props.data);
    const [userData, setUserData] = useContext(AuthContext);

    const countTasks = (tasks) => {
        let active = 0, completed = 0, failed = 0, newTask = 0;
        tasks.forEach(task => {
            if (task.active) active++;
            if (task.completed) completed++;
            if (task.failed) failed++;
            if (task.newTask) newTask++;
        });
        return { active, completed, failed, newTask };
    };

    const updateTaskStatus = (index, actionType) => {
        const updatedTasks = employee.tasks.map((task, i) => {
            if (i === index) {
                const updated = { ...task };
                if (actionType === 'accept') {
                    updated.newTask = false;
                    updated.active = true;
                }
                if (actionType === 'complete') {
                    updated.completed = true;
                    updated.active = false;
                }
                if (actionType === 'fail') {
                    updated.failed = true;
                    updated.active = false;
                }
                return updated;
            }
            return task;
        });

        const updatedEmployee = {
            ...employee,
            tasks: updatedTasks,
            taskCounts: countTasks(updatedTasks)
        };

        setEmployee(updatedEmployee);

        const updatedUserData = userData.map(user =>
            user.id === updatedEmployee.id ? updatedEmployee : user
        );
        setUserData(updatedUserData);

        localStorage.setItem('loggedInUser', JSON.stringify({
            role: 'employee',
            data: updatedEmployee
        }));
        localStorage.setItem('employees', JSON.stringify(updatedUserData));
    };

    return (
        <>
            <div className='p-10 bg-[#1C1C1C] h-screen'>
                <Header changeUser={props.changeUser} data={employee} />
                <TaskListNumbers data={employee} />
                <TaskList data={employee} onStatusChange={updateTaskStatus} />
            </div>
        </>
    );
}

export default EmployeeDashboard;
