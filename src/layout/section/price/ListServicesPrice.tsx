import { styled } from 'styled-components';
import { Icon } from '../../../components/Icon';

export type PriceValueType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7

type ListServicesPropsType = {
    itemPrice?: string,
}

export const ListServicesPrice = (props: ListServicesPropsType) => {
    return (
        <ListServices>
                <ItemListServices>
                <Icon iconId={"map"} width='15px' height='15px' viewbox='0 0 15 15'/>
                    {props.itemPrice}
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
`