import { AnimatePresence, motion } from "framer-motion";
import React from "react";

function ModalContainer({ children, isOpen, setIsOpen }) {
    if (!isOpen) return;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-0 right-0 w-svw h-svh bg-black/20 z-50 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                >
                    <div className="w-full h-full flex items-center justify-center">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="min-w-10 min-h-10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {children}
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

    );
}

export default ModalContainer;