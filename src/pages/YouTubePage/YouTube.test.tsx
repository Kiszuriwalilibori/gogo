//import { render } from "../../testing-library-utils";
import { render /*, screen */ } from "@testing-library/react";
import YouTubePage from "./YouTubePage";
// import { create } from "react-test-renderer";

describe("Given YouTube component", () => {
    describe("when called with given props", () => {
        it("renders correct content", () => {
            describe("when called with isLoading = true", () => {
                it("renders LoadingIndicator", () => {
                    const { queryByText } = render(
                        <YouTubePage isLogged={false} isError={false} isLoading={false} errorMessage="test" />
                    );
                    const errorText = queryByText("You");
                    expect(errorText).toBeInTheDocument();
                });
            });
        });
    });
});
