'use client';

import useTradingViewWidget from '@/hooks/UseTradingViewWidget';
import { cn } from '@/lib/utils';
import React, { memo } from 'react';


// This interface defines the props for the TradingViewWidget component, 
// which is a reusable wrapper around TradingView's embeddable widgets. 
// It accepts the script URL for the specific widget, a configuration object, optional title, height, and additional CSS classes.
interface TradingViewWidgetProps {
    title?: string;
    scriptURL: string;
    config: Record<string, unknown>;
    height?: number;
    className?: string;
}

const TradingViewWidget = ({title, scriptURL, config, height = 600, className}: TradingViewWidgetProps) => {
  const containerRef = useTradingViewWidget(scriptURL, config, height);


  return (
    <div className='w-full'>
      {title && 
      <h3 className= 'font-semibold text-2xl text-gray-100 mb-5'>
        {title}
        </h3>
      }
      <div className={cn('tradingview-widget-container', className)} ref={containerRef}>
        <div className="tradingview-widget-container__widget" style={{ height, width: "100%" }} />
    </div>

    </div>

  );
}

export default memo(TradingViewWidget);
