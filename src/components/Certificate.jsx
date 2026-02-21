import React from "react"
import { Box, Typography } from "@mui/material"
import SchoolIcon from "@mui/icons-material/School"

const Certificate = ({ title, inProgress, progressNote, institution, year }) => {
	return (
		<Box component="div" sx={{ width: "100%" }}>
			<Box
				sx={{
					position: "relative",
					overflow: "hidden",
					borderRadius: 2,
					boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
					background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))",
					border: inProgress
						? "2px dashed rgba(139, 92, 246, 0.4)"
						: "1px solid rgba(139, 92, 246, 0.2)",
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
					{title || "Education"}
				</Typography>
				{institution && (
					<Typography
						variant="body2"
						sx={{
							color: "#cbd5e1",
							textAlign: "center",
							mb: 0.5,
						}}>
						{institution}
					</Typography>
				)}
				{year && (
					<Typography
						variant="body2"
						sx={{
							color: "#94a3b8",
							textAlign: "center",
							mb: 0.5,
							fontSize: "0.8rem",
						}}>
						{year}
					</Typography>
				)}
				{inProgress && (
					<Typography
						variant="body2"
						sx={{
							color: "#94a3b8",
							textAlign: "center",
							display: "flex",
							alignItems: "center",
							gap: 1,
							mt: 0.5,
						}}>
						<span className="inline-block w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
						{progressNote || "Currently Pursuing"}
					</Typography>
				)}
			</Box>
		</Box>
	)
}

export default Certificate
