'use client';
import { useEffect, useRef } from "react";

const useTradingViewWidget = (scriptURL: string, config: Record<string, unknown>, height = 600) => {

    const containerRef = useRef<HTMLDivElement | null>(null);

      useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (container.dataset.loaded) return;

    const widgetHost = document.createElement("div");
    widgetHost.style.cssText = `width: 100%; height: ${height}px;`;
    widgetHost.className = "tradingview-widget-container__widget";
    container.appendChild(widgetHost);

    const script = document.createElement("script");
    script.src = scriptURL;
    script.async = true;
    script.innerHTML = JSON.stringify(config);
    container.appendChild(script);
    container.dataset.loaded = "true";

    return () => {
        script.remove();
        widgetHost.remove();
        delete container.dataset.loaded;
    };
}, [scriptURL, config, height]);
    
    return containerRef;

}

export default useTradingViewWidget;