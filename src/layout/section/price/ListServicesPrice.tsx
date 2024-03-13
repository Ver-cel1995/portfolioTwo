import { styled } from 'styled-components';

type ListServicesPropsType = {
    itemPrice?: string,
    icon?: React.ReactNode,
}

export const ItemsServicesPrice = (props: ListServicesPropsType) => {
    return (
        <ListServices>
                <ItemListServices>
                    <div>
                        {props.icon}
                        {props.itemPrice}
                    </div>
                </ItemListServices> 
        </ListServices>
    );
};

const ListServices = styled.ul`
    margin-top: 21px;    
`

const ItemListServices = styled.li`
    margin-bottom: 16px;
    text-align: start;

    & > div {
        display: flex;
        align-items: center;
        gap: 5px;
    }
`

