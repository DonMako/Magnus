import { DialogContent } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

const Equipe = ({ nom }: { nom: string }) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button onClick={() => setOpen(true)}>
				{nom}
			</button>
			<Dialog
				open={open}
				onClose={() => setOpen(false)}
			>
				<DialogTitle id="alert-dialog-title">
					{nom}
				</DialogTitle>
				<DialogContent>
					Les derniers résultats de l'équipe
				</DialogContent>
			</Dialog>
		</>
	)
}

export default Equipe;