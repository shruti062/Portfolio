from flask import Flask, render_template, url_for
import pandas as pd

app = Flask(__name__)

# Load CSV data
csv_path = "spotify-2023.csv"
df = pd.read_csv(csv_path, encoding='latin1')
df.fillna("Unknown", inplace=True)
df = df.reset_index().rename(columns={'index': 'id'})

# Add placeholder image and set audio file path conditionally
def get_default_file_path(track_name):
    default_paths = {
        "Seven": "https://example.com/music/seven.mp3",
        "Cruel Summer": "https://example.com/music/cruel_summer.mp3",
        # Add more conditions here if needed
    }
    return default_paths.get(track_name, "https://example.com/music/default.mp3")

if 'image_path' not in df.columns:
    df['image_path'] = 'm1.jpg'

if 'file_path' not in df.columns:
    df['file_path'] = df['track_name'].apply(get_default_file_path)

@app.route("/")
def index():
    return render_template("music.html", songs=df.to_dict(orient="records"))

@app.route("/albums")
def albums():
    return render_template("albums.html", albums=df.to_dict(orient="records"))

@app.route("/artists")
def artists():
    unique_artists = df.drop_duplicates(subset=['artist(s)_name'])
    return render_template("artists.html", artists=unique_artists.to_dict(orient="records"))

@app.route("/song/<int:song_id>")
def song_detail(song_id):
    if 0 <= song_id < len(df):
        song = df.iloc[song_id]
        prev_id = song_id - 1 if song_id > 0 else len(df) - 1
        next_id = song_id + 1 if song_id < len(df) - 1 else 0
        return render_template(
            "song_detail.html",
            song=song.to_dict(),
            prev_id=prev_id,
            next_id=next_id
        )
    return "Song not found", 404

if __name__ == "__main__":
    app.run(debug=True)
