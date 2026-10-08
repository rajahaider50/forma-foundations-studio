package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun ListingsScreen(onCreate:()->Unit){Card{Column{Text("Listings");Text("Domain-specific listings workflow");Button(onClick=onCreate){Text("Create")}}}}
