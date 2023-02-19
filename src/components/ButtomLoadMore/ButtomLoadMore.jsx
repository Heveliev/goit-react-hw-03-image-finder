import { Button } from "./ButtomLoadMore.styled";

export const ButtomLoadMore = ({title,onClick}) => {
    return (
        <Button type='button'>{title}</Button>
    )
}