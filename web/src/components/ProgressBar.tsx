import React from 'react';

interface ProgressBarProps {
  progress: number
}

export function ProgressBar(props: ProgressBarProps) {
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        role="progressbar"
        aria-label="progress of habits completed for the day"
        aria-valuenow={props.progress}
        className="h-3 rounded-xl bg-violet-600"
        style={{ width: `${props.progress}%` }}
      />
    </div>
  );
}
