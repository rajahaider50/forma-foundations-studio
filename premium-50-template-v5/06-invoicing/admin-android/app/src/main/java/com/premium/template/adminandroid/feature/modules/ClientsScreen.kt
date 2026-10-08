package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun ClientsScreen(onCreate:()->Unit){Card{Column{Text("Clients");Text("Domain-specific clients workflow");Button(onClick=onCreate){Text("Create")}}}}
