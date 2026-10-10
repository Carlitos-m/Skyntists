import streamlit as st
import numpy as np
st.set_page_config(page_title="Skyentist Front",
                   page_icon="💫",
                   layout="wide")
st.title("Potential bio-molecules portal")
st.markdown(" modular workbench for bio-molecules visualization ")

st.sidebar.header("Navigation")
app_mode=st.sidebar.selectbox(
    'choose view',
    ["List of molecules detected",
     "Scientific Plots & Data",
     "Astrophotography Gallery"])

#if app_mode=="List of molecules detrected":
