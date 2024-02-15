import React from "react";

export class Comments extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {

		return (
			<>
				<form action="" method="post">
					<label>
						<span>Оставить комментарий</span>
						<textarea />
					</label>
				</form>
			</>
		)
	}
}