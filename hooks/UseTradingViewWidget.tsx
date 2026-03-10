'use client';
import { useEffect, useRef } from "react";

const useTradingViewWidget = (scriptURL: string, config: Record<string, unknown>, height = 600) => {

    const containerRef = useRef<HTMLDivElement | null>(null);

             useEffect(
 
             () => {
    +            const container = containerRef.current;
    +            if (!container || container.dataset.loaded) return;
    +
    +            const widgetHost = container.querySelector<HTMLDivElement>(
    +                ".tradingview-widget-container__widget"
    +            );
    +            if (!widgetHost) return;
    +
    +            widgetHost.style.width = "100%";
    +            widgetHost.style.height = `${height}px`;
     
                 const script = document.createElement("script");
                 script.src = scriptURL;
                 script.async = true;
    +            script.textContent = JSON.stringify(config);
                     
    +            container.appendChild(script);
    +            container.dataset.loaded = "true";
     
                 return () => {
    +                script.remove();
    +                widgetHost.replaceChildren();
    +                delete container.dataset.loaded;
                 };
     
         },[scriptURL, config, height] );
    
    return containerRef;

}

export default useTradingViewWidget;
