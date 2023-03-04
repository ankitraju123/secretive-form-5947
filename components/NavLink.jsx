import React from "react";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
function NavLink({ to, name, onClose, ...rest }) {


    return (
   <Link href={to} duration={1000} onClick={onClose}>
            <Button

                size="sm"

                {...rest}
            >
                {name}
            </Button>
     
            </Link>
    );
}

export default NavLink;