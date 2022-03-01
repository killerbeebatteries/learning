(defvar prev 0.0143)
(defvar now 0.0091)

(write (* 
			(/
				(- prev now) (/ (+ prev now) 2)
	 		) 
		100)
)
