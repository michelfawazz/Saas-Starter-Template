"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useProModal } from "@/hooks/use-pro-modal";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";


export const ProModal = () => {
  const proModal = useProModal();
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsMounted(true);
  }, []);


  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      toast({
        description: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose} >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 overflow-y-auto">
          <DialogContent className="max-w-[855px] overflow-y-auto">




            <div className="mx-auto max-w-7xl px-6 lg:px-8 overflow-y-auto">
              Used to Lock Certain Features

            </div>
            {/* ssub button */}
            <Button
              variant="default"
              className="w-full"
              disabled={loading}
              onClick={onSubscribe}
            >
              Subscribe
            </Button>
          </DialogContent>
        </div>

      </Dialog>
    </div>

  );
};