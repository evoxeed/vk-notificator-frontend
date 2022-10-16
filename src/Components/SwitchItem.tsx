import {
    SimpleCell,
    Switch
} from "@vkontakte/vkui";

function SwitchItem(props) {
    const {
        label,
        onSwitch,
        defaultChecked
    } = props;

    return (
        <SimpleCell Component="label" after={
            <Switch
                defaultChecked={defaultChecked}
                onChange={(evt) => onSwitch(evt.target.checked)}/>
        }>
            { label }
        </SimpleCell>
    );
}

export default SwitchItem;