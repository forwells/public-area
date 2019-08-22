import '../assets/styles/footer.styl';

export default {
    data() {
        return {
            author: 'zhaoyadan'
        }
    },
    render() {
        return (
            <div id="footer">
                <span>made by {this.author}</span>
            </div>
        )
    }
}