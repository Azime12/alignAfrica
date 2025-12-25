       <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            <Button
              onClick={handleOpenMainMenu}
              endIcon={<ChevronRightIcon />}
              sx={{
                width: 200,
                height: 70,
                ml: {md:25,lg:55, xl:60},
                mr: 0,
                bgcolor: "#f7bc47",
                color: "#000",
                fontWeight: "bold",
                textTransform: "uppercase",
                borderRadius: "0px 10px 10px 0px",
                fontSize: 20,
                lineHeight: "70px",
                boxShadow: "inset 0 0 35px #e89c03",
                "&:hover": {
                  bgcolor: "#FCDC9A",
                  boxShadow: "inset 0 0 50px #ffb82a",
                },
              }}
            >
              ☰ Menu
            </Button>

            <Menu
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={handleCloseMenus}
              PaperProps={{ sx: { backgroundColor: "#fff", minWidth: 240 } }}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item.id}
                  onMouseEnter={(e) => handleOpenSubmenu(e, item)}
                  sx={{
                    backgroundColor: item.bgColor,
                    color: "#fff",
                    "&:hover": { backgroundColor: item.bgColor },
                  }}
                >
                  <Box display="flex" justifyContent="space-between" width="100%">
                    <Box display="flex" gap={1} alignItems="center">
                      {item.icon}
                      {item.title}
                    </Box>
                    {item.submenu && <ChevronRightIcon />}
                  </Box>
                </MenuItem>
              ))}
            </Menu>

            {/* Sub Menu */}
            <Menu
              anchorEl={submenuAnchor}
              open={Boolean(submenuAnchor)}
              onClose={() => setSubmenuAnchor(null)}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              PaperProps={{
                sx: { backgroundColor: activeItem?.bgColor, minWidth: 220 },
              }}
            >
              {activeItem?.submenu?.map((sub) => (
                <MenuItem
                  key={sub.path}
                  component={Link}
                  to={sub.path}
                  onClick={handleCloseMenus}
                  sx={{
                    color: "#fff",
                    "&:hover": { backgroundColor: activeItem.bgColor },
                  }}
                >
                  <Box display="flex" gap={1} alignItems="center">
                    {sub.icon}
                    {sub.title}
                  </Box>
                </MenuItem>
              ))}
            </Menu>
          </Box>
