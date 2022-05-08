from bs4 import BeautifulSoup
from matplotlib import image
from pandas import describe_option
import requests

source = requests.get("https://www.lesitedelasneaker.com/release-dates/?filter=latest_drops").text

soup = BeautifulSoup(source, 'lxml')
 
label= soup.find('div').find_all('h3')
image= soup.find('div').find_all('img')
# price= soup.find('div').select_one('child_element')

print(image)