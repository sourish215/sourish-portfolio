import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Stack,
  Link,
  Drawer,
  IconButton,
  List,
  ListItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="primary"
      sx={{
        padding: md ? "20px" : "15px 20px 15px 20px",
      }}
    >
      <Stack direction="row">
        <Typography
          variant="h4"
          ml={md ? 0 : 4}
          p={1}
          component={Box}
          height={70}
          width={70}
          sx={{
            fontSize: "1.9rem",
            border: "2px solid black",
            borderRadius: "5px",
            "&:hover": { backgroundColor: "#71eeb8" },
          }}
        >
          <Link
            href="/"
            underline="none"
            sx={{ fontWeight: "bold" }}
            color="secondary"
          >
            sb.
          </Link>
        </Typography>

        {!md && (
          <Stack
            direction="row"
            spacing={6}
            mr={4}
            sx={{
              flexGrow: "1",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Link
              variant="h6"
              href="/"
              underline="hover"
              color="black"
              sx={{
                fontWeight: "normal",
                "&:hover": {
                  color: "#71eeb8",
                },
              }}
            >
              Home
            </Link>
            <Link
              variant="h6"
              href="/projects"
              underline="hover"
              color="black"
              sx={{
                fontWeight: "normal",
                "&:hover": {
                  color: "#71eeb8",
                },
              }}
            >
              Projects
            </Link>
            <Link
              variant="h6"
              href="/resume"
              underline="hover"
              color="black"
              sx={{
                fontWeight: "normal",
                "&:hover": {
                  color: "#71eeb8",
                },
              }}
            >
              Resume
            </Link>
            <Link
              variant="h6"
              href="/about"
              underline="hover"
              color="black"
              sx={{
                fontWeight: "normal",
                "&:hover": {
                  color: "#71eeb8",
                },
              }}
            >
              About
            </Link>
            <Link
              variant="h6"
              href="/contact"
              underline="hover"
              color="black"
              sx={{
                fontWeight: "normal",
                "&:hover": {
                  color: "#71eeb8",
                },
              }}
            >
              Contact
            </Link>
          </Stack>
        )}
        {md && (
          <IconButton
            disableRipple
            sx={{ flexGrow: "1", justifyContent: "flex-end" }}
            color="inherit"
            aria-label="menu"
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Drawer
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          PaperProps={{
            sx: {
              backgroundColor: "#303030",
            },
          }}
        >
          <List>
            <ListItem button>
              <Link
                variant="h6"
                href="/"
                color="primary"
                underline="none"
                fontWeight="bold"
              >
                Home
              </Link>
            </ListItem>

            <ListItem button>
              <Link
                variant="h6"
                href="/projects"
                color="primary"
                underline="none"
                fontWeight="bold"
              >
                Projects
              </Link>
            </ListItem>

            <ListItem button>
              <Link
                variant="h6"
                href="/resume"
                color="primary"
                underline="none"
                fontWeight="bold"
              >
                Resume
              </Link>
            </ListItem>

            <ListItem button>
              <Link
                variant="h6"
                href="/about"
                color="primary"
                underline="none"
                fontWeight="bold"
              >
                About
              </Link>
            </ListItem>

            <ListItem button>
              <Link
                variant="h6"
                href="/contact"
                color="primary"
                underline="none"
                fontWeight="bold"
              >
                Contact
              </Link>
            </ListItem>
          </List>
        </Drawer>
      </Stack>
    </AppBar>
  );
};

export default Navbar;
