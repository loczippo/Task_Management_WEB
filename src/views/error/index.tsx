import { ToggleButton } from "../../components";
import { IToggle } from "../../interfaces/toggle.interface";

function ErrorView() {
    const data: IToggle = {name: "Page not found"};
    return (
      <div className="flex-1">
        <div className='h-full flex flex-col'>
            <ToggleButton {...data} />
            <div className='overflow-x-auto break-all pl-5 pr-5'>
                <h1>404 page not found</h1>
            </div>
      </div>
    </div>
    );
}

export default ErrorView;