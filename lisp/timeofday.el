(setq hour (string-to-number (car (split-string (nth 3 (split-string (current-time-string))) ":"))))
(message "Hour: %d" hour)
