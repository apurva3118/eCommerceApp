export interface ISearchBarProps {
    showBack?: boolean;
    showClear?: boolean;
    value?: string;
    onChangeText?: (text: string) => void;
    onClearPress?: () => void;
    editable?: boolean
    onPress?: () => void
}