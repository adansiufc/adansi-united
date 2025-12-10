import * as React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

export default function ResponsiveModal({
  showModal,
  setShowModal,
  children,
  handleClose,
  className = "",
}: {
  showModal: boolean;
  handleClose?: () => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  className?: string;
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  React.useEffect(() => {
    if (!handleClose) return;
    if (!showModal) {
      handleClose();
    }
  }, [handleClose, showModal]);

  if (isDesktop) {
    return (
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className={cn(className)}>{children}</DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={showModal} onOpenChange={setShowModal}>
      <DrawerContent className={cn("bg-[#fff]", className)}>{children}</DrawerContent>
    </Drawer>
  );
}
