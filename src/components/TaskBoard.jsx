import { useState } from "react";
import AddTaskModal from "./task/AddTaskModal";
import SearchTask from "./task/SearchTask";
import TaskAction from "./task/TaskAction";
import TaskList from "./task/TaskList";

const TaskBoard = () => {
  const initialTask = {
    id: crypto.randomUUID(),
    title: "Capture tasks",
    description:
      "We’ve spent over a decade refining Todoist to be an extension of your mind. Capture and organize tasks instantly using easy-flowing, natural language.",
    tags: ["API", "Python", "JavaScript"],
    priority: "High",
    isFavorite: false,
  };
  const [tasks, setTasks] = useState([initialTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setShowAddModal(false);
  };
  return (
    <section className="mb-20" id="tasks">
      {showAddModal && <AddTaskModal onSave={handleAddTask} />}
      <div className="container">
        <SearchTask />

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddClick={() => setShowAddModal(true)} />

          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
};
export default TaskBoard;
