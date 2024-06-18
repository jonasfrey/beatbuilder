// here only struct/object/class/model definitions should be mentioned
// for example
class O_beat{
    constructor(
        s_name, 
        n_bpm, 
        b_playing, 
        a_o_track, 
        n_bars
    ){
        this.s_name = s_name, 
        this.n_bpm = n_bpm, 
        this.b_playing = b_playing
        this.a_o_track = a_o_track
        this.n_bars = n_bars
    }
}
class O_note{
    constructor(
        n_nor_start, 
        n_nor_duration, 
        n_nor_velocity, 
        n_nor_pitch
    ){
        this.n_nor_start = n_nor_start, 
        this.n_nor_duration = n_nor_duration, 
        this.n_nor_velocity = n_nor_velocity, 
        this.n_nor_pitch = n_nor_pitch
    }
}

class O_pattern{
    constructor(
        a_o_note
    ){
        this.a_o_note = a_o_note
    }
}

class O_sample{
    constructor(
        s_name, 
        s_url_icon, 
        s_url_audio,
    ){

        this.s_name = s_name, 
        this.s_url_icon = s_url_icon, 
        this.s_url_audio = s_url_audio

    }
}
class O_track{
    constructor(
        o_sample,
        s_name, 
        n_nor_sample_1, 
        n_nor_sample_2, 
        n_grid_divisions, 
        n_idx_a_o_pattern, 
        a_o_pattern, 
        s_char_keyboard
    ){
        this.o_sample = o_sample
        this.s_name = s_name
        this.n_nor_sample_1 = n_nor_sample_1
        this.n_nor_sample_2 = n_nor_sample_2, 
        this.n_grid_divisions = n_grid_divisions
        this.n_idx_a_o_pattern = n_idx_a_o_pattern 
        this.a_o_pattern = a_o_pattern
        this.s_char_keyboard = s_char_keyboard
    }
}


export {
    O_beat,
    O_note,
    O_pattern,
    O_sample,
    O_track
}