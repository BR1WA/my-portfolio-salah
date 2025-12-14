import React, { useState } from "react"
import { Modal, IconButton, Box, Fade, Backdrop, Zoom, Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import FullscreenIcon from "@mui/icons-material/Fullscreen"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import SchoolIcon from "@mui/icons-material/School"

const Certificate = ({ ImgSertif, title, inProgress, progressNote }) => {
	const [open, setOpen] = useState(false)
	const isPdf = ImgSertif && ImgSertif.endsWith('.pdf')

	const handleOpen = () => {
		if (isPdf) {
			// Open PDF in new tab
			window.open(ImgSertif, '_blank')
		} else if (ImgSertif) {
			setOpen(true)
		}
	}

	const handleClose = () => {
		setOpen(false)
	}

	// If in progress (no certificate yet)
	if (inProgress) {
		return (
			<Box component="div" sx={{ width: "100%" }}>
				<Box
					sx={{
						position: "relative",
						overflow: "hidden",
						borderRadius: 2,
						boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
						background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))",
						border: "2px dashed rgba(139, 92, 246, 0.4)",
						minHeight: "200px",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						padding: 3,
						transition: "all 0.3s ease",
						"&:hover": {
							borderColor: "rgba(139, 92, 246, 0.8)",
							transform: "translateY(-5px)",
							boxShadow: "0 12px 24px rgba(139, 92, 246, 0.2)",
						},
					}}>
					<SchoolIcon sx={{ fontSize: 60, color: "rgba(139, 92, 246, 0.7)", mb: 2 }} />
					<Typography
						variant="h6"
						sx={{
							color: "#a78bfa",
							fontWeight: 600,
							textAlign: "center",
							mb: 1,
						}}>
						{title || "In Progress"}
					</Typography>
					<Typography
						variant="body2"
						sx={{
							color: "#94a3b8",
							textAlign: "center",
							display: "flex",
							alignItems: "center",
							gap: 1,
						}}>
						<span className="inline-block w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
						{progressNote || "Currently Pursuing"}
					</Typography>
				</Box>
			</Box>
		)
	}

	return (
		<Box component="div" sx={{ width: "100%" }}>
			{/* Thumbnail Container */}
			<Box
				className=""
				sx={{
					position: "relative",
					overflow: "hidden",
					borderRadius: 2,
					boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
					transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
					background: isPdf ? "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))" : "transparent",
					minHeight: isPdf ? "200px" : "auto",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					cursor: "pointer",
					"&:hover": {
						transform: "translateY(-5px)",
						boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
						"& .overlay": {
							opacity: 1,
						},
						"& .hover-content": {
							transform: "translate(-50%, -50%)",
							opacity: 1,
						},
						"& .certificate-image": {
							filter: "contrast(1.05) brightness(1) saturate(1.1)",
						},
					},
				}}
				onClick={handleOpen}>
				{isPdf ? (
					// PDF placeholder
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							padding: 4,
							width: "100%",
						}}>
						<Box
							sx={{
								width: 80,
								height: 100,
								background: "linear-gradient(135deg, #ef4444, #dc2626)",
								borderRadius: 2,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								mb: 2,
								boxShadow: "0 4px 12px rgba(239, 68, 68, 0.3)",
							}}>
							<Typography sx={{ color: "white", fontWeight: "bold", fontSize: "1.2rem" }}>PDF</Typography>
						</Box>
						<Typography
							variant="body1"
							sx={{
								color: "#e2e8f0",
								fontWeight: 500,
								textAlign: "center",
								mb: 1,
							}}>
							{title || "Certificate"}
						</Typography>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 1,
								color: "#94a3b8",
								fontSize: "0.875rem",
							}}>
							<OpenInNewIcon sx={{ fontSize: 16 }} />
							<span>Click to view</span>
						</Box>
					</Box>
				) : (
					<>
						{/* Certificate Image with Initial Filter */}
						<Box
							sx={{
								position: "relative",
								"&::before": {
									content: '""',
									position: "absolute",
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									backgroundColor: "rgba(0, 0, 0, 0.1)",
									zIndex: 1,
								},
							}}>
							<img
								className="certificate-image"
								src={ImgSertif}
								alt="Certificate"
								style={{
									width: "100%",
									height: "auto",
									display: "block",
									objectFit: "cover",
									filter: "contrast(1.10) brightness(0.9) saturate(1.1)",
									transition: "filter 0.3s ease",
								}}
							/>
						</Box>

						{/* Hover Overlay */}
						<Box
							className="overlay"
							sx={{
								position: "absolute",
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								opacity: 0,
								transition: "all 0.3s ease",
								cursor: "pointer",
								zIndex: 2,
							}}>
							{/* Hover Content */}
							<Box
								className="hover-content"
								sx={{
									position: "absolute",
									top: "50%",
									left: "50%",
									transform: "translate(-50%, -60%)",
									opacity: 0,
									transition: "all 0.4s ease",
									textAlign: "center",
									width: "100%",
									color: "white",
								}}>
								<FullscreenIcon
									sx={{
										fontSize: 40,
										mb: 1,
										filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
									}}
								/>
								<Typography
									variant="h6"
									sx={{
										fontWeight: 600,
										textShadow: "0 2px 4px rgba(0,0,0,0.3)",
									}}>
									View Certificate
								</Typography>
							</Box>
						</Box>
					</>
				)}
			</Box>

			{/* Modal for images only */}
			{!isPdf && (
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 300,
						sx: {
							backgroundColor: "rgba(0, 0, 0, 0.9)",
							backdropFilter: "blur(5px)",
						},
					}}
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						margin: 0,
						padding: 0,
						"& .MuiBackdrop-root": {
							backgroundColor: "rgba(0, 0, 0, 0.9)",
						},
					}}>
					<Box
						sx={{
							position: "relative",
							width: "auto",
							maxWidth: "90vw",
							maxHeight: "90vh",
							m: 0,
							p: 0,
							outline: "none",
							"&:focus": {
								outline: "none",
							},
						}}>
						{/* Close Button */}
						<IconButton
							onClick={handleClose}
							sx={{
								position: "absolute",
								right: 16,
								top: 16,
								color: "white",
								bgcolor: "rgba(0,0,0,0.6)",
								zIndex: 1,
								padding: 1,
								"&:hover": {
									bgcolor: "rgba(0,0,0,0.8)",
									transform: "scale(1.1)",
								},
							}}
							size="large">
							<CloseIcon sx={{ fontSize: 24 }} />
						</IconButton>

						{/* Modal Image */}
						<img
							src={ImgSertif}
							alt="Certificate Full View"
							style={{
								display: "block",
								maxWidth: "100%",
								maxHeight: "90vh",
								margin: "0 auto",
								objectFit: "contain",
							}}
						/>
					</Box>
				</Modal>
			)}
		</Box>
	)
}

export default Certificate

