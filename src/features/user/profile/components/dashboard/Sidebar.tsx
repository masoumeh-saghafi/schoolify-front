import List from "@mui/material/List";
import Box from "@schoolify/core/components/base/inputs/Box";
import Button from "@schoolify/core/components/base/inputs/Button";
import ListItem from "@schoolify/core/components/base/inputs/ListItem";
import ListItemText from "@schoolify/core/components/base/inputs/ListItemText";
import Typography from "@schoolify/core/components/base/inputs/Typography";
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";
import useClientDeviceType from "@schoolify/core/hooks/common/useClientDeviceType";
import DashboardSidebar from "@schoolify/features/shared/dashboard/components/Sidebar";
import SidebarButton from "@schoolify/features/shared/dashboard/components/Sidebar/SidebarButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const isActive = (link: string) => location.pathname === link;

interface SidebarProps {
  handleNavigation: (path: string) => void;
}

const ProfileSidebar = (props: SidebarProps) => {
  const { handleNavigation } = props;

  // const { data, isLoading, error } = useListSummarySchools();
  const [openSchools, setOpenSchools] = useState<Record<string, boolean>>({});
  const theme = useAppTheme();
  // const userImpersonationStore = useUserImpersonationStore();
  const navigate = useNavigate();

  const toggleSchoolMenu = (schoolId: string) => {
    setOpenSchools((prev) => ({ ...prev, [schoolId]: !prev[schoolId] }));
  };
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const deviceType = useClientDeviceType();
  const isMobile = deviceType === "mobile";

  return (
    <>
      <DashboardSidebar open={open} handleDrawerClose={handleDrawerClose}>
        <List sx={{ px: 1 }}>
          <ListItem disablePadding>
            <SidebarButton
              onClick={() => handleNavigation("ticket")}
              enableBorder={true}
              isActive={isActive("/dashboard/ticket")}
            >
              {/* <SupportAgentIcon fontSize="small" /> */}
              <ListItemText
                sx={{
                  display: "block",
                  textWrap: "nowrap",
                  textAlign: "left",
                  ml: 1,
                }}
              >
                تیکت پشتیبانی
              </ListItemText>
            </SidebarButton>
          </ListItem>
        </List>

        <List sx={{ px: 1 }}>
          <ListItem disablePadding>
            <SidebarButton
              onClick={() => handleNavigation("account")}
              enableBorder={true}
              isActive={isActive("/dashboard/account")}
            >
              {/* <Settings fontSize="small" /> */}
              <ListItemText
                sx={{
                  display: "block",
                  textWrap: "nowrap",
                  textAlign: "left",
                  ml: 1,
                }}
              >
                مدیریت حساب کاربری
              </ListItemText>
            </SidebarButton>
          </ListItem>
        </List>

        <Typography
          variant="caption"
          sx={{
            // textAlign: "center",
            // direction: "rtl",
            mx: 1,
            mt: 2,
            display: "block",
            textWrap: "nowrap",
          }}
        >
          لیست مدارس
        </Typography>

        <List
          sx={{
            px: 1,
            height: "65vh",
            overflowY: "auto",
            direction: "rtl",
            mb: 8,
          }}
        >
          {/* <Box sx={{ direction: "ltr" }}>
            {isLoading ? (
              <Typography sx={{ textAlign: "center", p: 2 }}>
                در حال بارگذاری...
              </Typography>
            ) : error ? (
              <Typography sx={{ textAlign: "center", p: 2, color: "red" }}>
                خطا در دریافت اطلاعات
              </Typography>
            ) : (
              data?.map((school, index: number) => (
                <>
                  <ListItem disablePadding sx={{ mb: 1 }}>
                    <SidebarButton
                      onClick={() => toggleSchoolMenu(school.id)}
                      enableBorder={true}
                    >
                      <ListItemText
                        sx={{
                          textWrap: "nowrap",
                          textAlign: "left",
                        }}
                      >
                        {school.data.title}
                      </ListItemText>
                      {openSchools[school.id] ? <ExpandLess /> : <ExpandMore />}
                    </SidebarButton>
                  </ListItem>
                  {openSchools[school.id] && (
                    <List component="div" disablePadding sx={{ px: 4, mb: 4 }}>
                      <ListItem
                        disablePadding
                        sx={{
                          mb: 1,
                        }}
                      >
                        <SidebarButton
                          onClick={() => {
                            handleNavigation(`school/${school.id}/management`);
                          }}
                          disabled={school.data.role === "reporter"}
                          enableBorder={true}
                          isActive={isActive(
                            `/dashboard/school/${school.id}/management`
                          )}
                        >
                          <Settings fontSize="small" />
                          <ListItemText
                            sx={{
                              display: "block",
                              textWrap: "nowrap",
                              textAlign: "left",
                              ml: 1,
                            }}
                          >
                            داشبورد مدیریت
                          </ListItemText>
                        </SidebarButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <SidebarButton
                          onClick={() => {
                            handleNavigation(`school/${school.id}/report`);
                          }}
                          enableBorder={true}
                          isActive={isActive(
                            `/dashboard/school/${school.id}/report`
                          )}
                        >
                          <Settings fontSize="small" />
                          <ListItemText
                            sx={{
                              display: "block",
                              textWrap: "nowrap",
                              textAlign: "left",
                              ml: 1,
                            }}
                          >
                            داشبورد نظارت
                          </ListItemText>
                        </SidebarButton>
                      </ListItem>
                    </List>
                  )}
                </>
              ))
            )}
          </Box> */}
        </List>

        <Button
          variant="outlined"
          sx={{
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.secondary.main,
            borderColor: theme.palette.secondary.main,
            m: 1,
            mb: !isMobile ? 2 : undefined,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            // width: "95%",
          }}
          onClick={() => {
            // if (userImpersonationStore.isImpersonation) {
            //   removeImpersonation();
            //   navigate("/admin/dashboard/customers");
            // } else {
            //   logOut();
            //   navigate("/login");
            // }
          }}
        >
          {/* {userImpersonationStore.isImpersonation
            ? "خروج از داشبورد مشتری"
            : "خروج از حساب"} */}
          خروج از حساب
        </Button>
      </DashboardSidebar>
    </>
  );
};

export default ProfileSidebar;
