import React from "react";
import { useEffect, useState } from "react";
import "./PeriodicTable.css";

import { GridItem, Grid, Flex, Spacer, Center, Box, Button } from "@chakra-ui/react";

const tabledataWidth = "4rem";
const tabledataHeight = "4rem";

const atomicNumberSize = "0.65em";
const symbolElementSize = "1.5em";
const elementNameSize = "1.5em";

const ElementInfo = () => {
    const [symbol, setSymbol] = useState([]);

    //fetch data
    const fetchElements = async () => {
        try {
            const response = await fetch(
                "https://periodic-table-elements-info.herokuapp.com/elements"
            );
            const data = await response.json();

            //update data
            setSymbol(data);
        } catch (error) {
            console.log(error);
        }
    };

    //loads api data
    useEffect(() => {
        fetchElements();
    }, []);

    return (
        <>
            <div id="elementsTableData">
                {symbol.map((item) => (
                    <Flex my={"2rem"} className="asideContent" key={item.atomicNumber}>
                        <Button
                            className="listOfElement"
                            style={{
                                width: tabledataWidth,
                                height: tabledataHeight,
                                textAlign: "center",
                                border: "1px solid black",
                                color: 'black',
                                backgroundColor: "#"+item.cpkHexColor,
                                flexDirection: 'column'
                            }}
                        >
                            <p style={{ fontSize: atomicNumberSize }}>{item.atomicNumber}</p>
                            <p style={{ fontSize: symbolElementSize }}>{item.symbol}</p>
                        </Button>

                        <Box my={"auto"} mx={"1rem"}>
                            <p style={{ fontSize: elementNameSize }}>{item.name}</p>
                        </Box>

                        <Spacer />

                        <Box my={"auto"}>
                            <p style={{ fontSize: elementNameSize }}>{item.groupBlock}</p>
                        </Box>
                    </Flex>
                ))}
            </div>
        </>
    );
};

export default ElementInfo;
