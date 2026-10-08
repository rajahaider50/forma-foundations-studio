package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun PlacesScreen(onCreate:()->Unit){Card{Column{Text("Places");Text("Domain-specific places workflow");Button(onClick=onCreate){Text("Create")}}}}
