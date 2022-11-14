import { TopBar, Slider, Player, NotLogged, LoadingIndicator, Message } from "components";
import { useDispatchAction } from "hooks";

interface Props {
    isLogged: Boolean;
    isError: Boolean;
    errorMessage: string;
    isLoading: Boolean;
}
const YouTubePage = (props: Props) => {
    const { isLogged, isError, isLoading, errorMessage } = props;
    const { clearError } = useDispatchAction();

    if (!isLogged) return <NotLogged />;
    if (isLoading) return <LoadingIndicator />;
    if (isError) return <Message message={errorMessage ? errorMessage : ""} handleClear={() => clearError()} />;

    return (
        <div>
            <TopBar />
            <main className="main">
                <Slider />
                <Player />
            </main>
        </div>
    );
};

export default YouTubePage;
