import { Component } from "react";
import FilterTextStyled from "./FilterCss/FilterTextStyled";
import FilterInputStyled from "./FilterCss/FilterInputStyled";

class FilterName extends Component {

    render() {

        const { value, onFilter } = this.props

        return (
            <>
                <FilterTextStyled>Find contacts by name</FilterTextStyled>
                <FilterInputStyled type="text" onChange={onFilter} value={value} />
            </>
        )
    }
}

export default FilterName;