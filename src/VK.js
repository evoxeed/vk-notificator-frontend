import {
    ConfigProvider,
    AdaptivityProvider,
    AppRoot,
    SplitLayout,
    SplitCol,
    usePlatform
} from "@vkontakte/vkui";
import App from "./App";

function Vk() {
    const platform = usePlatform()
    return (
        <ConfigProvider platform={platform}>
            <AdaptivityProvider>
                <AppRoot>
                    <SplitLayout>
                        <SplitCol>
                            <App/>
                        </SplitCol>
                    </SplitLayout>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    );
}

export default Vk;