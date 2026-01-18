import { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);

    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        const checkTouch = () => {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };
        checkTouch();

        if (!isTouchDevice) {
            const addEventListeners = () => {
                document.addEventListener("mousemove", onMouseMove);
                document.addEventListener("mouseenter", onMouseEnter);
                document.addEventListener("mouseleave", onMouseLeave);
                document.addEventListener("mousedown", onMouseDown);
                document.addEventListener("mouseup", onMouseUp);
            };

            const removeEventListeners = () => {
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseenter", onMouseEnter);
                document.removeEventListener("mouseleave", onMouseLeave);
                document.removeEventListener("mousedown", onMouseDown);
                document.removeEventListener("mouseup", onMouseUp);
            };

            const onMouseMove = (e: MouseEvent) => {
                setPosition({ x: e.clientX, y: e.clientY });
                
                const target = e.target as HTMLElement;
                const isLink = target.closest('a') || target.closest('button') || target.closest('input') || target.closest('textarea');
                setLinkHovered(!!isLink);
            };

            const onMouseEnter = () => {
                setHidden(false);
            };

            const onMouseLeave = () => {
                setHidden(true);
            };

            const onMouseDown = () => {
                setClicked(true);
            };

            const onMouseUp = () => {
                setClicked(false);
            };

            addEventListeners();
            return () => removeEventListeners();
        }
    }, [isTouchDevice]);

    if (isTouchDevice) return null;

    const cursorStyle = {
        left: `${position.x}px`,
        top: `${position.y}px`,
    };

    return (
        <div
            className={`fixed top-0 left-0 pointer-events-none z-9999 mix-blend-difference
                ${hidden ? "opacity-0" : "opacity-100"}
            `}
            style={cursorStyle}
        >
             {/* Main Cursor Element */}
            <div 
                className={`
                    relative -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ease-out
                    ${linkHovered 
                        ? "w-16 h-16 bg-white/10 backdrop-blur-[2px] border border-white/20" 
                        : "w-4 h-4 bg-primary shadow-[0_0_10px_var(--primary)]"}
                    ${clicked ? "scale-90" : "scale-100"}
                `} 
            >
                {/* Center dot appearing only when hovering links for precision */}
                {linkHovered && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full" />
                )}
            </div>
        </div>
    );
};

export default CustomCursor;
