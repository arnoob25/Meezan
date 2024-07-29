import { DndContext } from "@dnd-kit/core"
import { useSpaceContext } from "../helpers/Contexts"
import CategorizedGoalsView from "./CategorizedGoalsView"
import ImportantGoalsView from "./ImportantGoalsView"

const ListOfGoals = () => {
    const { shouldDisplayCategories } = useSpaceContext()

    return (
        <div> {/* TODO: this should be a scrollable area */}
            <DndContext>
                {shouldDisplayCategories
                    ? <CategorizedGoalsView />
                    : <ImportantGoalsView />}
            </DndContext>
        </div>
    )
}

export default ListOfGoals