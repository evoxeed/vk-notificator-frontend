import {useState} from 'react';
import {
    Group,
    Panel,
    PanelHeader,
    View,
} from "@vkontakte/vkui";
import SwitchItem from "./Components/SwitchItem.tsx";

function App() {
    const [switchData, setSwitchData] = useState([
        {
            id: 0,
            label: 'Комментарии к записям',
            defaultChecked: false
        },
        {
            id: 1,
            label: 'Ссылки',
            defaultChecked: true
        },
        {
            id: 2,
            label: 'Фотоальбомы',
            defaultChecked: false
        },
    ]);


    const onSwitch = (id, value) => {
        console.log(id, value)
        // setSwitchData(switchData.filter(item => item.id === id))
    };

    const switchList = switchData.map(switchItem =>
        <SwitchItem
            label={switchItem.label}
            key={switchItem.id}
            defaultChecked={switchItem.defaultChecked}
            onSwitch={(value) => onSwitch(switchItem.id, value)}
        />
    )

    return (
        <View activePanel="switch">
            <Panel id="switch">
                <PanelHeader>vk-notificator</PanelHeader>
                <Group>
                    <div>{switchList}</div>
                </Group>
            </Panel>
        </View>
    );
}

export default App;
